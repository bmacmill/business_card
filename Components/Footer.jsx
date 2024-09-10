import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer">
            <i><FaTwitterSquare /></i>
            <i><FaFacebookSquare /></i>
            <i><FaInstagramSquare /></i>
            <i><FaGithubSquare /></i>
        </div>
    )
}