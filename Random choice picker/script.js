const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect();
  }
});

function createTags(input) {
  const texts = input
    .split(",")
    .filter((text) => text.trim() !== "")
    .map((text) => text.trim());

  tagsEl.innerHTML = ""

  texts.forEach((text) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerText = text;
    tagsEl.appendChild(tag);
  });
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const random = pickRandomTags()

    if (random !== undefined) {
      highLight(random)

      setTimeout(() => {
        unHighLight(random)
      }, 100)
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const random = pickRandomTags()

      highLight(random)
    }, 100)
  }, times * 100);
}

function pickRandomTags() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}

function highLight(tag) {
  tag.classList.add("highlight");
}

function unHighLight(tag) {
  tag.classList.remove("highlight");
}

// textarea.addEventListener('keyup', (e) => {
//     createTags(e.target.value)

//     if(e.key === 'Enter') {
//         setTimeout(() => {
//             e.target.value = ''
//         }, 10)

//         randomSelect()
//     }
// })

// function createTags(input) {
//     const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

//     tagsEl.innerHTML = ''

//     tags.forEach(tag => {
//         const tagEl = document.createElement('span')
//         tagEl.classList.add('tag')
//         tagEl.innerText = tag
//         tagsEl.appendChild(tagEl)
//     })
// }

// function randomSelect() {
//     const times = 30

//     const interval = setInterval(() => {
//         const randomTag = pickRandomTag()

// 	if (randomTag !== undefined) {
//         highlightTag(randomTag)

//         setTimeout(() => {
//             unHighlightTag(randomTag)
//         }, 100)
// 	}
//     }, 100);

//     setTimeout(() => {
//         clearInterval(interval)

//         setTimeout(() => {
//             const randomTag = pickRandomTag()

//             highlightTag(randomTag)
//         }, 100)

//     }, times * 100)
// }

// function pickRandomTag() {
//     const tags = document.querySelectorAll('.tag')
//     return tags[Math.floor(Math.random() * tags.length)]
// }

// function highlightTag(tag) {
//     tag.classList.add('highlight')
// }

// function unHighlightTag(tag) {
//     tag.classList.remove('highlight')
// }
