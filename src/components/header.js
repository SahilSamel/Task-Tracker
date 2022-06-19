import Button from "./button";

const Header = ({title,onAdd,showAddTask}) => {
  return (
    <header className="header">
        <h1>Yo.</h1>
        <Button color={showAddTask? '#9C6464':'#75e6dc'} text={showAddTask ? "Done":"Add Tasks"} onClick = {onAdd}/>
    </header>
  );
}

export default Header;
