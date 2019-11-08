import "./index.tsx";

const button = document.createElement("button");

button.innerHTML = "View jeremy";

const viewJez = () => {
  window.setMP({
    member_id: "41651",
    house: "1",
    constituency: "Islington North",
    party: "Labour",
    entered_house: "2017-06-09",
    left_house: "2019-11-06",
    entered_reason: "general_election",
    left_reason: "dissolution",
    person_id: "10133",
    lastupdate: "2019-11-06 14:18:57",
    title: "",
    given_name: "Jeremy",
    family_name: "Corbyn",
    full_name: "Jeremy Corbyn",
    url: "/mp/10133/jeremy_corbyn/islington_north",
    image: "/images/mpsL/10133.jpg",
    image_height: 160,
    image_width: 120,
    office: [
      {
        moffice_id: "uk.parliament.data/Member/185/OppositionPost/4",
        dept: "",
        position: "Leader of Her Majesty's Official Opposition",
        from_date: "2015-09-12",
        to_date: "9999-12-31",
        person: "10133",
        source: ""
      },
      {
        moffice_id: "uk.parliament.data/Member/185/ParliamentaryPost/789",
        dept: "",
        position: "Leader of the Labour Party",
        from_date: "2015-09-12",
        to_date: "9999-12-31",
        person: "10133",
        source: ""
      }
    ]
  });
  setTimeout(() => {
    window.setVotes([
      "<li>Almost always voted for paying higher ben…e, between 2015&#x2013;2016</a></li>",
      "<li>Voted against replacing <b>Trident</b> wi…gainst, 3 absences, in 2016</a></li>",
      "<li>Generally voted for a referendum on the U…s, between 2015&#x2013;2016</a></li>",
      "<li>Voted against an <b>equal number of elect…or, 1 vote against, in 2016</a></li>",
      "<li>Voted for removing <b>hereditary peers</b…r, 0 votes against, in 2016</a></li>",
      "<li>Consistently voted against <b>fewer MPs</…r, 2 votes against, in 2016</a></li>"
    ]);
  }, 1000);
};

button.addEventListener("click", viewJez);

document.body.appendChild(button);
