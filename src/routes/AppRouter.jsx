import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, AboutMePage, ProjectsPage, ContactPage } from '../pages';
import { AppLayout } from '../layouts';
import { ABOUTME_PATH, CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from '../constants';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={HOME_PATH} element={<AppLayout />}>
                <Route index element={<HomePage/>}/>
                <Route path={ABOUTME_PATH} element={<AboutMePage/>}/>
                <Route path={PROJECTS_PATH} element={<ProjectsPage/>}/>
                <Route path={CONTACT_PATH} element={<ContactPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter