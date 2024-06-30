console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id,
      memberStatus = $(`#${id}.member-status`).val();

    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        console.log("response", response);
        const result = response.data;
        console.log("result:", result);

        if (result.data) {
          $(".member-status").blur();
        } else alert("User update failed");
      })
      .catch((err) => {
        console.log(err);
        alert("User update failed");
      });
  });
});

$(document).ready(function () {
  $("#statusFilter").on("change", function () {
    var selectedStatus = $(this).val();
    $(".table tbody tr").each(function () {
      var status = $(this).find(".member-status").val();
      if (selectedStatus === "all" || status === selectedStatus) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $("#statusFilter").trigger("change");

  $("#searchInput").on("keyup", function () {
    var searchText = $(this).val().toLowerCase();
    $(".table tbody tr").each(function () {
      var productName = $(this).find("td:nth-child(2)").text().toLowerCase();
      if (productName.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
