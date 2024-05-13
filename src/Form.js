import React, { useState, useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
const Form = () => {
    const navigate = useNavigate()
    function Admit() {
        navigate('/about', { state: { datas: data } })

    }

    const [data, setdata] = useState({
        name: '', roll: '', degree: '', father: '', image: ''
    })

    const SubmitData = (e) => {
        e.preventDefault()
        console.log(data)
    }

    function setValue(e) {
        const { name, value } = e.target;
        setdata((prevalue) => ({
            ...prevalue, [name]: value
        }))
    }

    const setImage = (e) => {
        const file = e.target.files[0];
        setdata((prevalue) => ({
            ...prevalue, [e.target.name]: file
        }))
    }


    return (
        <div>
            <h1 style={{ textAlign: 'center', backgroundColor: '#157347', color: 'white ', letterSpacing: '2px' }} className='bcaHead'>BCA Admission Card </h1>
            <h5 style={{ backgroundColor: '#EFF2F9', marginBottom: '0px', marginLeft: '5px', width: '100vw', paddingLeft: '25vw', height: '50px', paddingTop: '20px' }}> ● Fill up your information</h5>
            <form onSubmit={SubmitData} style={{ width: '100vw', backgroundColor: "#EFF2F9", height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '50%' }}>
                    <div class="form-group inputDiv ">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" value={data.name} name='name' onChange={(e) => { setValue(e) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>

                    <div class="form-group inputDiv">
                        <label for="exampleInputEmail1">Father's Name</label>
                        <input type="text" class="form-control" value={data.father} name='father' onChange={(e) => { setValue(e) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Father's Name" />
                    </div>

                    <div class="form-group inputDiv">
                        <label for="exampleInputEmail1">Roll No.</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" name='roll' value={data.roll} onChange={(e) => { setValue(e) }} aria-describedby="emailHelp" placeholder="Enter Roll No." />
                    </div>

                    <div class="form-group inputDiv ">
                        <label for="exampleInputEmail1">Degree Year</label>

                        <select class="form-select" aria-label="Default select example" name='degree' value={data.degree} onChange={(e) => { setValue(e) }}>
                            <option selected>Select Year</option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                        </select>
                    </div>

                    <div class="form-group inputDiv">
                        <label for="exampleInputEmail1">Enter Image</label>
                        <input type="file" class="form-control" name='image' onChange={(e) => { setImage(e) }} />
                    </div>


                    <button type="submit" onClick={Admit} class="btn  btn-success" >Admit Card</button>

                </div>
            </form>
        </div>
    )
}

export default Form