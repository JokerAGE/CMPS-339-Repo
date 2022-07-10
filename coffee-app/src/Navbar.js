export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li className="active">
                <a href="/registration">Registration</a>
            </li>
            <li>
                <a href="/logins">Login</a>
            </li>
            <li>
                <a href="/viewOrders">All Orders</a>
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
            
        </ul>
    </nav>
}