import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href="/">
                <li>Portfolio</li>
                </Link>
                <Link href="/about-us">
                <li>About Us</li>
                </Link>
                <Link href="/contact-us">
                <li>Contact Us</li>
                </Link>
                <Link href="/jobs">
                <li>Jobs</li>
                </Link>
            </ul>
        </div>
    )
}