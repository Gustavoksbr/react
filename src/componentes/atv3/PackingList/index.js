function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = (
        <del>
          {name + " ✔"}
        </del>
      );
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Packing List de Sally Ride</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Traje espacial"
          />
          <Item 
            isPacked={true} 
            name="Capacete com folha dourada"
          />
          <Item 
            isPacked={false} 
            name="Foto de Tam"
          />
        </ul>
      </section>
    );
  }
  