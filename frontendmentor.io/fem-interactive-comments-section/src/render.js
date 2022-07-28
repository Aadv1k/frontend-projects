const generatePerms = perms => {
  let blob = "";

  perms.forEach(perm => {
    blob += `<button class="btn btn--${perm}" data-${perm}>${perm}</button>`;
  });
  return blob;
};

const renderContent = (input, imgs) => {
  const currentUser = input.currentUser.username;
  const data = input.comments;
  let blob = "";

  for (const post of data) {
    let { username } = post.user;
    let imgPath = imgs[`image-${post.user.username}.png`];
    let { content } = post;
    let { createdAt } = post;
    let { score } = post;
    let perms = username === currentUser ? ["edit", "delete"] : ["reply"];

    blob += `<div class="card">
    <div class="card__profile">
      <span><img src="${imgPath}" alt="🧑" data-for="${username}"/></span>
      <strong>${username}</strong>
      <p class="card__posted" data-postedAt>${createdAt}</p>
    </div>

    <div class="card__content">
      <p>${content}</p>
    </div>

    <div class="card__counter">
      <div class="counter">
        <button type="button" class="btn btn--plus"></button>
        <span data-counter voted="org">${score}</span>
        <button type="button" class="btn btn--minus"></button>
      </div>
    </div>

    <div class="card__btn">
      ${generatePerms(perms)}
    </div>

  </div>`;

    const originalPoster = post.user.username;
    for (const reply of post.replies) {
      username = reply.user.username;
      imgPath = imgs[`image-${reply.user.username}.png`];
      content = reply.content;
      createdAt = reply.createdAt;
      score = reply.score;
      perms = username === currentUser ? ["edit", "delete"] : ["reply"];

      const btnClass = currentUser === username ? "uname-you" : "";

      blob += ` <div class="card card--nested">
            <div class="card__profile">
              <span><img src="${imgPath}" alt="🧑" data-for="${username}"/></span>
              <strong class="${btnClass}">${username}</strong>
              <p class="card__posted" data-postedAt>${createdAt}</p>
            </div>
            <p class="card__content">
              <span>${originalPoster}</span>
              ${content}
            </p>
            <div class="card__counter">
              <div class="counter">
                <button type="button" class="btn btn--plus"></button>
                <span data-counter voted="org">${score}</span>
                <button type="button" class="btn btn--minus"></button>
              </div>
            </div>
            <div class="card__btn">
                ${generatePerms(perms)}
            </div>
            <div class="card__ghost">
              <button class="btn btn--primary" data-update>update</button>
            </div>
          </div>`;
    }
  }
  return blob;
};

const renderComment = (input, imgs) => {
  const currentUserImg = imgs[input.currentUser.image.png.split("/").pop()];
  const currentUser = input.currentUser.username;

  return `<div class="card card--comment">
        <span class="card__profile"
          ><img src="${currentUserImg}" alt="🧑"
        /></span>

        <div class="card__input">
          <span class="placeholder"></span>
          <div
            class="input"
            contenteditable
            ondragenter="event.preventDefault(); event.dataTransfer.dropEffect = 'none'"
            ondragover="event.preventDefault(); event.dataTransfer.dropEffect = 'none'"
            data-input
          ></div>
        </div>

        <div class="card__btn">
          <button type="button" class="btn btn--primary" data-send="${currentUser}">send</button>
        </div>
</div>`;
};

export { renderContent, renderComment };
