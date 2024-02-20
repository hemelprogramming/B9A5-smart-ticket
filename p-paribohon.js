const allseat = document.getElementsByClassName('all-seat');
let count = 40;
let select = 0;
for (const seat of allseat) {
  seat.addEventListener('click', function (e) {
    count = count - 1;
    setInnerText('seat-left', count);
    select = select + 1;

    setInnerText('Select-seat', select);

    if (count < 36) {
      return count;
    }
    // set seat bg color
    e.target.style.backgroundColor = '#1DD100';
    e.target.style.color = '#fff';

    const selectedSeat = e.target.innerText;
    const seatPrice = document.getElementById('seat-price');
    const selectedSeatPrice = document.createElement('li');
    const p1 = document.createElement('p');
    p1.innerText = selectedSeat;
    const p2 = document.createElement('p');
    p2.innerText = 'Economic';
    const p3 = document.createElement('p');
    p3.innerText = 500;
    selectedSeatPrice.appendChild(p1);
    selectedSeatPrice.appendChild(p2);
    selectedSeatPrice.appendChild(p3);
    seatPrice.appendChild(selectedSeatPrice);
  });
}
// set inner text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
  document.getElementById(id).innerText = value;
}
// set background color
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-green-500');
}
