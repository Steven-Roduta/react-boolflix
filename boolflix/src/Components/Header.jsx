export default function Header(){
    return (
        <>
          <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
         </div>
        
        </>
    )
}