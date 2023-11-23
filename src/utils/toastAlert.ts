import { toast } from 'react-toastify';

export default function toastAlert(mensagem: string, tipo: string, timer=5000) {
    switch (tipo) {
            
        case 'sucess':
            toast.success(mensagem, {
                position: 'top-center',
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'info':
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'error':
            toast.error(mensagem, {
                position: 'top-center',
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        default:
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: timer,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;
    }
}