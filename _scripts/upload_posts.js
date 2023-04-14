const posts = require("../_outputs/posts_merged.json");

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function main() {
  const sortedPosts = posts
    .slice(0)
    .sort((a, z) => new Date(a.date) - new Date(z.date));

  for (const post of sortedPosts) {
    console.log(`[DEBUG] ${post.date} ${post.title} ...`);

    const response = await fetch(`${process.env.ROOT_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      mode: "cors",
      body: JSON.stringify({
        data: {
          Title: post.title,
          Description: post.description,
          Date: post.date,
          Locals: post.locals,
          Body: post.body,
          Timezone: post.timezone,
        },
      }),
    });

    const json = await response.json();

    if (json.error) {
      console.log(`[ERROR] Create post ${post.title} failed.`);
      throw new Error(JSON.stringify(json.error, null, 2));
    } else {
      console.log(`[DEBUG] Post #${json.data.id} created.`);
    }

    await delay(1000);
  }
}

main();
