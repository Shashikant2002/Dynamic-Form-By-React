import React from 'react'

const Pdf = () => {

    const print = () =>{
        window.print();
    }


    return (
        <>
            <div id="pdf" class="Pdf">
                <p>Date: _______ <br /> <br />

                    To,<br />

                    _______________

                    ________________ <br /><br />

                    The Director/ Manager HR <br />

                    M/s---------- <br /><br />

                    (name of the employer with his address) <br /></p>

                <p><b>Sub: Resignation from services.</b></p>

                <p>Sir,</p>
                <p>I do not wish to continue work with your organization due to my person reasons/ due to joining of new
                    employment (give the reason) any more with your organization, hence I have decided to resign from the
                    services with immediate effect. <br /><br />

                    he notice period if any applicable be waived off or this resignation be accepted after the notice period
                    under intimation to me. <br /><br />

                    Please release all my dues of employment with a certificate of experience with your organization at the
                    earliest. <br /><br />

                    I am also submitting all the documents in my possession and request you to clear my accounts at the
                    earliest. Please order for the release of all my service benefits and relieve me from my post. <br />

                    I wish to thank you for allowing me to work with your organization.</p><br />

                <p>Thanking you,<br /><br /><br />

                    Yours sincerely <br /><br />

                    Name : <br /><br />

                    Post : <br /><br />

                    Address : <br /><br />

                    Contact number :</p> <br /><br />
            </div>


            <button onClick={() => print()}>Print</button>
        </>
    )
}

export default Pdf
