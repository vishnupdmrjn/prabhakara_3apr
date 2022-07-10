interface Subject{
registerObserver(o: Observer);
removerObserver(O: Observer);
notifyObserver();
}

interface Observer{
update(temperature: number);
} 



class WeatherStation {
private temperature: number;

setTemperature(temp: number) {
console.log('WeatherStation: new temp. measurement: ' + temp);
this.temperature = temp;
}

public registerObserver(o: Observer){
       this.observer.push(o);
}

public removerObserver(o: Observer){
       let index = this.observers.indexOf(o);
        this.observer.splice(index, 1);
}

public notifyObservers() {
for(let observer of this.observers){
observer.update(this.temperature);
}
}
}

class TemperatureDisplay implements Observer{
private subject: Subject;

constructor(weatherStation: Subject){
this.subject = weatherStation;
weatherStation.registerObserver(this); }


public update(temperature: number) {
console.log('TemperatureDisplay: Update Display');
}

}

class Fan implements Observer{
private subject: Subject;

constructor(weatherStation: Subject){
this.subject = weatherStation;
weatherStation.registerObserver(this); }


public update(temperature: number) {
if(temprature > 25){
console.log('Fan: its hot');
} else {
console.log('Fan: its not hot'); }
}
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);