import React, { useState, useEffect } from "react";
import bgImage from "../../assets/image 13.png";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [shareData, setShareData] = useState(false);
    const [checkWarning, setCheckWarning] = useState(false);
    const navigate = useNavigate(false);
    const [location, setLocation] = useState({
        city: "Mumbai", country: "India",
    });
    const ENVIROMENT = process.env.REACT_APP_ENVIRONMENT;

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            navigate("/genres");
        }

    });




    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckWarning(true);
        if (!name || !username || !email || !mobile || !shareData) return;
        else {
            const currentUser = { name, username, email, mobile };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("location", JSON.stringify(null));
            localStorage.setItem("selectedGenres", null);
        }
        console.log(JSON.parse(localStorage.getItem("currentUser")));

    }
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.leftHeader}>
                    <h1 className={styles.h1}>Discover new
                        things on <br />SuperApp</h1>
                </div>
                <img src={bgImage} className={styles.bgImage} alt="background" />
            </div>
            <div className={styles.right}>
                <div className={styles.rightHeader}>
                    <h2>Super app</h2>
                    <h3>Create your new account</h3>
                </div>
                <div className={styles.form}>
                    <div className="form-group">
                        <input type="text" className={styles.input} placeholder="Name" name="name" value={name}
                            style={{ border: checkWarning && !name ? "1px solid red" : "none", }} onChange={(e) => setName(e.target.value)} />
                        <label className={styles.label} style={{
                            display: checkWarning && !name ? "block" : "none",
                        }}>field is required</label>
                    </div>

                    <div className="form-group">
                        <input type="text" style={{
                            border: checkWarning && !username ? "1px solid red" : "none",
                        }} placeholder="UserName" name="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label
                            className={styles.label}
                            style={{
                                display: checkWarning && !username ? "block" : "none",
                            }}
                        >
                            Field is required
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="email" style={{
                            border: checkWarning && !email ? "1px solid red" : "none",
                        }} placeholder="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label
                            className={styles.label}
                            style={{
                                display: checkWarning && !email ? "block" : "none",
                            }}
                        >
                            Field is required
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="tel" style={{
                            border: checkWarning && !email ? "block" : "none",
                        }} placeholder="Mobile" name="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <label
                            className={styles.label}
                            style={{
                                display: checkWarning && !mobile ? "block" : "none",
                            }}
                        >
                            Field is required
                        </label>
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" className={styles.checkbox} value={shareData} onChange={(e) => setShareData(e.target.checked)} />
                        <label  htmlFor="mobile">Share my registration data with Superapp</label>
                        <label
							className={styles.label}
							style={{
								display: checkWarning && !shareData ? "block" : "none",
							}}
						>
							Check if you want to proceed
						</label>
                    </div>
                    <button type={styles.submit} onClick={handleSubmit} >SIGN UP</button>

                </div>
                <div className={styles.footer}>
                    <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span> Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
