export default function Menu() {
  return (
    <div>
      <MenuItem img="/chzburgrimg.jpg" name="Cheeseburger" description="Yum" price="$20.00"/>
      <MenuItem img="/hmbrgrimg.jpg" name="Hamburger" description="Not as yum" price="$15.00"/>
      <MenuItem img="/chmknswichimg.jpg" name="Chicken Sandwich" description="Also yum" price="$18.00"/>
      <MenuItem img="/vgnbrgrimg.jpg" name="Vegan Burger" description="Yum and yay!" price="$22.00"/>
    </div>
  );
}

function MenuItem({name, description, price, img}) {
  return (
    <div>
      <img src={img} />
      <p className="name-text">{name}</p>
      <p className="description-text">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}
