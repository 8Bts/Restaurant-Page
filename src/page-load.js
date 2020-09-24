/* eslint-disable linebreak-style */
const load = () => {
  const header = document.createElement('header');
  header.className = 'text-center p-3';
  header.innerHTML = '<h1 style="font-size: 3rem; color: var(--light)">New York Deli\'s</h1>';
  document.getElementById('content').appendChild(header);

  const main = document.createElement('main');
  main.className = 'main container';
  main.innerHTML = `
    <div class="row">
      <div class="col-4 text-center tab">
        <a href="#" id="home">Home</a>
      </div>
      <div class="col-4 text-center tab">
        <a href="#" id="menu">Menu</a>
      </div>
      <div class="col-4 text-center tab">
        <a href="#" id="contact">Contact</a>
      </div>
    </div>
    <div class="row">
      <div id ="dContent" class="col-12 d-content">
        <p id='dText' class="d-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim dignissimos impedit, necessitatibus nulla 
        perferendis explicabo reprehenderit nihil eius officiis 
        recusandae accusantium a laudantium, eveniet sunt, 
        voluptas unde magnam mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim dignissimos impedit, necessitatibus nulla 
        perferendis explicabo reprehenderit nihil eius officiis 
        recusandae accusantium a laudantium, eveniet sunt, 
        voluptas unde magnam mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim dignissimos impedit, necessitatibus nulla 
        perferendis explicabo reprehenderit nihil eius officiis 
        recusandae accusantium a laudantium, eveniet sunt, 
        voluptas unde magnam mollitia.
        </p>
      </div>
    </div>`;
    document.getElementById('content').appendChild(main);
};

export default load;