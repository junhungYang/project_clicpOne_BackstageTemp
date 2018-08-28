(function () {
  if (!localStorage.getItem("chatHistory")) {
    let history = [{
        propic: '/static/img/10.jpg',
        sender: 'friend',
        cont: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        date: "51min"
      },
      {
        sender: 'me',
        cont: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        date: "37min"
      },
      {
        propic: '/static/img/10.jpg',
        sender: 'friend',
        cont: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        date: false
      }
    ];
    localStorage.setItem("chatHistory", encodeURIComponent(JSON.stringify(history)));
  }
})();
