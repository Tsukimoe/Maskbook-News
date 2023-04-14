const posts = require("../_outputs/posts.json");
const uploads = require("../_outputs/uploads.json");

function create() {
  return uploads.reduce((acc, item) => {
    return {
      ...acc,
      ...item.results.reduce((acc2, item2) => {
        return {
          ...acc2,
          [item2.hash
            .replace(/^(large|medium|thumbnail|small)_/, "")
            .split("_")
            .slice(0, -2)
            .join(
              "_"
            )]: `https://dimension-strapi.s3.amazonaws.com/${item2.hash}${item2.ext}`,
        };
      }, {}),
    };
  }, {});
}

function main() {
  const table = create();

  posts.forEach((post) => {
    post.body = post.body.replace(
      /\((?:https:\/\/news\.mask\.io)?\/uploads\/(.+?)\.(png|jpeg|jpg|gif|webp)\)/img,
      (matched, name, ext) => {
        const key = name
          .replace(/[-.,]/g, "_")
          .replace(/__/g, "_")
          .replace(/^_/, "")
          .replace(/微信截图_/, "")
          .replace(/微信图片_/, "")

        if (!table[key]) {
            process.stderr.write(`Failed to locate for ${name}.${ext}.\n`)
            return matched
        }

        return `(${table[key]})`
      }
    );
  });

  process.stdout.write(JSON.stringify(posts, null, 4))
}

main();
