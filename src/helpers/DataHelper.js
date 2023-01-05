import { format, isToday, isTomorrow, isYesterday } from "date-fns"
import * as yup from 'yup'

const getInitialValuesforAddTask = (initialobj) => {
    let data = {}
    data["taskTitle"] = {
        title: "Task Title",
        placeholder: "Enter Title",
        value: initialobj?.taskTitle? initialobj.taskTitle:""
    }
    data["priority"] = {
        title: "Priority",
        options:[{id: 1, name: "Medium"},{id: 2, name: "Low"}],
        value: initialobj?.priority? [initialobj.priority]:[]
    }
    data["userName"] = {
        title: "Name",
        placeholder: "Enter Name",
        value: initialobj?.name? initialobj.name:""
    }
    data["time"] = {
        title: "Time",
        placeholder:"Due Time",
        value: initialobj?.time? initialobj.time:""
    }
    data["status"] = {
        title: "Status",
        options:[{id: 1, name: "Done"},{id: 2, name: "Pending"}],
        value:initialobj?.status? [initialobj.status]:[]
    }
    
    return data
}

const formatMyDate = (passedDate) => {
    let date = new Date(passedDate)
    return format(date, 'MM/dd/yyyy hh:mm').toString()
}

const checkDateForTask = (passedDate) => {
    let date = new Date(passedDate)
  if(isToday(date)){
    return "Today"
  }
  else if(isTomorrow(date)){
    return "Tomorrow"
  }
  else if(isYesterday(date)){
    return "Yesterday"
  }
  else{
    return format(date, 'MM/dd/yyyy hh:mm').toString()
  }
}

export { getInitialValuesforAddTask,formatMyDate,checkDateForTask } 