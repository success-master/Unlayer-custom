stockHandle() {
    switch (this.stockTitle) {
      case 'Glossy':
        console.log("Glossy");
        (document.querySelector('.u_row') as HTMLElement).style.backgroundColor = 'red';
        break;

      case 'Paper':
        console.log("Paper");
        (document.querySelector('.u_row') as HTMLElement).style.backgroundColor = 'green';
        break;

      case 'Poly':
        console.log("Poly");
        (document.querySelector('.u_row') as HTMLElement).style.backgroundColor = 'blue';
        break;

      default:
        break;
    }
}
