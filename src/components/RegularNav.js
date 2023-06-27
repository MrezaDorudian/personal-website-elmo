const RegularNav = ({ navbarMenu}) => {



  return (
    <>
      {navbarMenu.map((item) => {
        return (
          <li className="navbar-item" key={item.id}>
            <a href={item.path}>
              <span>{item.number}.</span>
              {item.title}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default RegularNav;
