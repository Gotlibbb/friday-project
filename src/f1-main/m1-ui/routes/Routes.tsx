import React from "react";
import {Route, Switch} from "react-router-dom";
import {Login} from "../u1-components/login/Login";
import {Registration} from "../u1-components/registration/Registration";
import {Profile} from "../u1-components/profile/Profile";
import {PasswordRecovery} from "../u1-components/passwordRecovery/PasswordRecovery";
import {NewPassword} from "../u1-components/newPassword/NewPassword";
import {Test} from "../u1-components/test/Test";
import {NotFound} from "../u1-components/notFound404/NotFound";

const Routes = () => {
    return <>
        <Switch>
            <Route path={'/login'}><Login/></Route>
            <Route path={'/registration'}><Registration/></Route>
            <Route path={'/profile'}><Profile/></Route>
            <Route path={'/password-recovery'}><PasswordRecovery/></Route>
            <Route path={'/new-password'}><NewPassword/></Route>
            <Route path={'/test'}><Test/></Route>
            <Route><NotFound/></Route>
        </Switch>
    </>
}

export default Routes