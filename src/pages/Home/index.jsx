
import MainLayout from '../../layout/MainLayout'
import Todo from '../../components/Todo/Todo'
import Pomodoro from '../../components/Pomodoro/Pomodoro';
import MyToasty from '../../components/Toastify';


const Home = () => {
    return (
        <>
            <MainLayout>
            <MyToasty/>
                <div className="mx-auto grid grid-cols-1 min-w-full p-3 mt-4 sm:flex h-[70rem] md:h-[40rem] sm:h-[60rem] gap-4">
                    <div className=" p-4 w-[100%] sm:w-[70%]">
                        <Pomodoro></Pomodoro>
                    </div>
                    <div className=" p-4 w-[100%] sm:w-[30%]">
                        <Todo></Todo>
                    </div>
                   
                </div>
            </MainLayout>
        </>
    );
}

export default Home;