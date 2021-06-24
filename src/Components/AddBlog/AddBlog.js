import React from 'react';

const AddBlog = () => {
    return (
        <>
        <div>
            <section class="container-fluid squad-bg">

                <div class="row justify-content-center">
                    <div class="col-12 col-sm-5 col-md-5 mt-5">
                        <form class="reg-area ">
                            <h5 class=" text-center title">PUBG Mobile</h5>
                            <h5 class="text-center title"> [Solo] </h5>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Team Name:</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your team name here" required />

                            </div>
                            <div class="form-group">
                                <label for="name">Phone Number</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter your phone number" required />
                            </div>

                            <div class="form-group" id="multiplayerinput" >

                                <label for="">Player 1 GameId: </label>
                                <input type="text" name="" id="" class="form-control"/>
                          
                      
                      </div>


                                <button type="submit" class="btn btn-block button text-white">Submit</button>
                  </form>

            </div>
                    </div>
    </section>
        </div>
        </>
            );
};

            export default AddBlog;