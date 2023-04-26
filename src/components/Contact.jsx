import React from 'react';

const Contact = () => {
  return (
    <>    
    <div className="contact">
        <main>
       <h1>Contact Us</h1>
       <form>
           <div>
               <label htmlfor="query">
                  Type of Query
               </label>
               <select name="myQuery" id="query">
                  <option value="sel" selected>
                       Select
                  </option>
                  <option value="ord">
                    Order related Issues
                  </option>
                  <option value="Site">
                     Site related Issues
                  </option>
                  <option value="fed">
                    Complaint related Issues
                  </option>
                  <option value="others">
                    Others
                  </option>
                </select>
            </div>
            <div>
               <label htmlfor="name">Name</label>
            <input type="text" name="myName" 
                id="name" 
                placeholder="Enter your Name"/>
            </div>
            <div>
               <label htmlfor="email">Email-Id</label>
            <input type="email" name="myEmail" 
                id="email" 
                placeholder="Enter your email"/>
            </div>
           <div>
               <label htmlfor="pho">Phone Number</label>
            <input type="phone" name="myPhone" 
                id="pho" 
                placeholder="Enter your Phone no"/>
            </div>
            <div id="radio">
                Are you a member of One King Resturant:
                Yes <input type="radio" name="eligible"/>
                No <input type="radio" name="eligible"/>
           </div>
           <div>
            <label htmlfor="message">
                Ellaborate your query
            </label>
            <input name="mesg" id="message" 
                cols="30" rows="10" placeholder='Tell us about your query'/>
           </div>
            <button type="submit" value="Submit">Send</button>
            <button type="reset" value="Reset">Reset</button>
    </form>
    </main>
</div>
</>
  );
};

export default Contact;