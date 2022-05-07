let base_url = window.location.host;

function deleteEmployee() {
  let tbody = document.getElementsByTagName("tbody");
  let id = tbody[0].children[0].lastElementChild.innerText;
  fetch(`${base_url}/api/employee/${id}`, {
    method: "DELETE",
    body: {
      id: id,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["success"]) {
        alert(data.message);
        window.location.href = base_url;
      }
      alert(data.message);
    });
}
