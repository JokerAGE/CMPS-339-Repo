export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Southeastern Java Pub</a>
        <a href="/cart" className="shopping-cart">Cart</a>
        <ul>
            <li className="active">
                <a href="/registration">Registration</a>
            </li>
            <li>
                <a href="/logins">Login</a>
            </li>
            
            <li>
                <a href="/add">Add Product</a>
            </li>
            <li>
                <a href="/delete">Delete</a>
            </li>
            <li>
                <a href="/sumbit">Order</a>
            </li>
            <li>
                <a href="/viewCustomers">Customers</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/viewOrders">All Orders</a>
            </li>
            <li>
                <a href="/updateOrders">Edit</a>
            </li>
            
        </ul>
    </nav>
}