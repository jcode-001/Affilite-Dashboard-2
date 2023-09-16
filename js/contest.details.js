const contestDetails = [
  {
    contestName: "smd challenge",
    vendor: "TheFotom",
    contestStatus: "active",
    startDate: "June 09, 2023",
    endDate: "Aug 15, 2023",
    amount: "2,532",
  },
  {
    contestName: "Propaganda",
    vendor: "Zed-X",
    contestStatus: "active",
    startDate: "June 09, 2023",
    endDate: "Aug 15, 2023",
    amount: "2,532",
  },
  {
    contestName: "Affliater",
    vendor: "Divas",
    contestStatus: "active",
    startDate: "Aug 12, 2023",
    endDate: "Oct 03, 2023",
    amount: "532",
  },
  {
    contestName: "smd challenge",
    vendor: "TheFotom",
    contestStatus: "active",
    startDate: "June 09, 2023",
    endDate: "Aug 15, 2023",
    amount: "2,532",
  },
  {
    contestName: "Propaganda",
    vendor: "Zed-X",
    contestStatus: "active",
    startDate: "June 09, 2023",
    endDate: "Aug 15, 2023",
    amount: "2,532",
  },
  {
    contestName: "Affliater",
    vendor: "Divas",
    contestStatus: "active",
    startDate: "Aug 12, 2023",
    endDate: "Oct 03, 2023",
    amount: "532",
  },
];

contestDetails.forEach((contest) => {
  // Destructuring the 'contestDetails' object
  const { contestName, vendor, contestStatus, startDate, endDate, amount } =
    contest;
  const tr = document.createElement("tr");

  const trContent = `
                        <td class="white-cl up-case">${contestName}</td>
                        <td>${vendor}</td>
                        <td class="${
                          contestStatus === "active"
                            ? "active-status"
                            : "ended-status"
                        }"> <div>${contestStatus}</div> </td>
                        <td>${startDate}</td>
                        <td>${endDate}</td>
                        <td>${amount}</td>
                        <td class="view-contest-btn"> <div>View Contest</div> </td>
`;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
