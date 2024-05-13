import React, { useEffect, useState, useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { useLocation } from 'react-router-dom'
import './App.css'
const Application = () => {
    const [data, setdata] = useState()
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            setdata(location.state.datas)
        }
    }, [location.state])

    useEffect(() => {
        console.log(data);
    }, [data])



    const array1 = ["Physics", "Maths", "C Programming", "IT&PC", "Computer Organization", "General English"];
    const array2 = ["C++", "Data Structure", "SAD", "DBMS", "Operating System", "CCN"];
    const array3 = ["Wireless and Mobile Computing", "Java", "Web Tech", "Cloud Computing", "Information System"];

    const divref = useRef();

    function handlebutton() {
        const element = divref.current;
        if (element) {
            var opt = {
                margin: 1,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', putOnlyUsedFonts: true }
            };
            html2pdf().from(element).set(opt).save();
        }
    }


    return (
        <>

            <section>
                {/* <h1 style={{ textAlign: 'center' }}>Admission Card</h1> */}
                <div className="container">
                    <div className="admit-card" ref={divref}>
                        <h1 style={{ textAlign: 'center' }}> Oxford University </h1>
                        <div className="BoxD border- padding mar-bot">
                            <div className="row">
                                <div className="col-sm-10">
                                    <table className="table table-bordered">
                                        <tbody>
                                            {
                                                data && <>
                                                    <tr>
                                                        <td><b>Student Name: </b>{data && data.name}</td>

                                                    </tr>
                                                    <tr>
                                                        <td><b>Father/Husband Name: </b>{data && data.father}</td>

                                                    </tr>
                                                    <tr>
                                                        <td><b>Degree Year: </b>{data && data.degree}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>ENROLLMENT NO : </b>9910101</td>

                                                    </tr>
                                                    <tr>
                                                        <td><b>Roll No.: </b>{data && data.roll}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Session: </b>2023 - 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Branch: </b>BCA</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Venue: </b>RNT College Kapasan</td>
                                                    </tr>
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-2 txt-center">
                                    <table className="table table-bordered">
                                        <tbody>
                                            {
                                                data && data.image && <tr>
                                                    <th scope="row txt-center"><img src={URL.createObjectURL(data.image)} width="180px" height="165px" /></th>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className="BoxF border- padding mar-bot txt-center">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Subject/Paper</th>
                                                <th>Exam Date</th>
                                                {/* <th>Exam Date</th> */}
                                                <th>Signature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.degree === "First" &&
                                                array1.map((elem, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{elem}</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                data && data.degree === "Second" &&
                                                array2.map((elem, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{elem}</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                data && data.degree === "Third" &&
                                                array3.map((elem, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{elem}</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div>
                            ● Keep it Safe: Your admit card is your ticket to the examination hall.<br style={{ marginBottom: "10px" }} />

                            ●   Check Details: Double-check all the details on your admit card, including your name, roll number, exam date, time, and venue. Ensure that there are no errors or discrepancies.<br />

                            ●   Read Instructions Carefully: Admit cards often come with important instructions regarding the examination. Make sure to read them carefully and follow them accordingly.
                            <br />
                            ●   Arrive Early: Plan to arrive at the examination center well before the reporting time mentioned on your admit card. This will give you ample time for security checks and finding your designated seat.
                            <br />
                            ● Bring Valid ID: Along with your admit card, carry a valid photo ID proof (such as Aadhar card, driving license, or passport) as per the instructions provided. Failure to produce a valid ID may result in disqualification.
                            <br />
                            ●  Follow Dress Code: Some exams may have specific dress codes. Make sure to adhere to the prescribed dress code mentioned in the instructions to avoid any inconvenience.
                            <br />
                            ●  No Electronic Devices: Leave all electronic devices like mobile phones, smartwatches, calculators, etc., at home or in designated storage areas. These items are usually not allowed inside the examination hall.

                            <br />
                        </div>
                        <footer className="txt-center mt-3">
                            <p>*** MUKUL UNIVERSITY ***</p>
                        </footer>

                    </div>
                </div>

            </section >
            <button className='btn btn-primary mb-5 download' onClick={handlebutton} >Download</button>
        </>
    )
}
export default Application