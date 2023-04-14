const posts = require("../_outputs/posts.json");
const uploads = require("../_outputs/uploads.json");

function create() {
  const table = uploads.reduce((acc, item) => {
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

  return {
    ...table,
    trump_biden: "https://dimension-strapi.s3.amazonaws.com/_29c43bd660.jpg",
    at_the_last: "https://dimension-strapi.s3.amazonaws.com/_2fe0591a67.png",
    ruixuan: "https://dimension-strapi.s3.amazonaws.com/_33bb0233a6.png",
  };
}

function main() {
  const table = create();

  posts.forEach((post) => {
    post.body = post.body
      .replaceAll("{{ site.baseurl_root }}", "")
      .replace(
        /\((?:https:\/\/news\.mask\.io)?\/uploads\/(.+?)\.(png|jpeg|jpg|gif|webp)\)/gim,
        (matched, name, ext) => {
          const key = name
            .replace(/[-.,]/g, "_")
            .replace(/__/g, "_")
            .replace(/^_/, "")
            .replace(/微信截图_/, "")
            .replace(/微信图片_/, "")
            .replace(/最后/, "at_the_last")
            .replace(/特朗普拜登/, "trump_biden")
            .replace(/睿萱/, "ruixuan");

          if (!table[key]) {
            throw new Error(`Failed to locate for ${name}.${ext}.\n`);
          }

          return `(${table[key]})`;
        }
      );
  });

  process.stdout.write(JSON.stringify(posts, null, 4));
}

main();
