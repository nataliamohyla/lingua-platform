import TeachersList from "../../components/TeachersList/TeachersList.jsx";



function TeachersPage({openLoginModal}) {
    return (
        <main>
            <TeachersList openLoginModal={openLoginModal} />
        </main>
    );
};
export default TeachersPage;