
import './ImageLinkForm.css';

const ImageLinkForm = () =>{

    return(

        <div className="lfcontainer">
            <p className='phrase'>
                {`This Magic Brain will detect faces in your pictures! Give it a try!`}
            </p>
            <div className='center'>
                <div className='form center box'>
                    <input className='input' type='text' placeholder='Enter the URL of your image' />
                    <button className='button'>Detect!</button>
                </div>
                
            </div>
            
        </div>

    )

}

export default ImageLinkForm;