import React from 'react';
import { useSelector } from 'react-redux';

export default function Contact() {

    const authorName=useSelector((state)=>state.user.name);

    function send(){
        alert("Submitted succesfully")
    }

  return (
    <div className="container">
    <div className="form">
        <form action="" onSubmit={send} className="row g-3">

        <div className="box">
                <label htmlFor="validationDefault02" className="form-label">Name</label>
                <input type="text" className="form-control" id="validationDefault03" name="author" value={authorName} required />
            </div>
            
            <div className="box">
                <label htmlFor="validationDefault02" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="validationDefault02"  name="content"  required></textarea>
            </div>

            
            <div className="box">
                <label htmlFor="validationDefault02" className="form-label">image or file</label>
                <input type="file" className="form-control" id="validationDefault03"  name="image"  />
            </div>
            
            <div className="box">
            <select className="form-select" name="category" aria-label="Default select example" >
                <option selected>Others</option>
                <option value="Post Related">AI</option>
                <option value="Malfunctionalty">Cryptcurrency</option>
                <option value="Bussiness">Blockchain</option>
                <option value="Sensorship">Web development</option>
                <option value="Inform admin">App development</option>
                <option value="Bug">Cloud</option>
                <option value="Not working on your devide">Jobs</option>
                <option value="Wnat changes">Economy</option>
                <option value="try premium">Environment</option>
            </select>
            </div>

            <div className="col-12">
                <br /><button className="btn btn-primary" type="submit">Submit form</button>
            </div>

            
        </form>
    </div>

</div>
  )
}
