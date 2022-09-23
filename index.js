const d = document,
  $badge = d.getElementById("badge"),
  $btn = d.getElementById("readAll")

const updateBadge = () => {
  const unread = d.querySelectorAll("[data-unread]").length
  $badge.textContent = unread
}

$btn.addEventListener("click", async () => {
  elements = d.querySelectorAll("[data-unread]")
  elements = Array.from(elements).reverse()

  for ($el of elements) {
    await new Promise(resolve => {
      setTimeout(() => {
        $el.removeAttribute("data-unread")
        $el.classList.remove("bg-[#f7fafd]")
        $el.classList.add("bg-transparent")
        $el.querySelector("[data-circle]").classList.remove("bg-[#f65351]")
        $el.querySelector("[data-circle]").classList.add("bg-transparent")
        $el.querySelector("[data-circle]").removeAttribute("data-circle")
        resolve()
      }, 300)
    })
  }
  updateBadge()
})
