/**
 * Created by bberman on 1/16/17.
 */
import {Template} from 'meteor/templating';
import Notifications from 'react-notify-toast';


Template.toastContainer.helpers({
    Notifications() {
        return Notifications;
    }
});