let points = Number(prompt('შეიყვანე ქულა'));

let names = prompt('შეიყვანე სახელი');

function getFeedback(point, name) {
  if (isNaN(points)) {
    alert('ვერ მოხერხდა ქულის იდენტიფიცირება შეიყვნაეთ თავიდან');
  } else if (points > 90) {
    alert('მაქსიმალური ქულა არის 90');
  } else {
    if (point < 51) {
      let maxpoints = 51;

      let different = maxpoints - point;

      alert(
        'სამწუხაროდ ' +
          name +
          ' თქვენ ვერ გადალახეთ მინიმალური ბარიერი თქვენ დაგაკლდათ ' +
          different +
          ' ქულა, უკეთესად მოემზადეთ'
      );
    } else {
      let maxpoints = 51;

      let different2 = point - maxpoints;

      alert(
        'გილოცავთ ' +
          names +
          ' თქვენ ' +
          different2 +
          ' ქულით მეტი აიღეთ ბარიერზე'
      );
    }
  }
}

getFeedback(points, names);
