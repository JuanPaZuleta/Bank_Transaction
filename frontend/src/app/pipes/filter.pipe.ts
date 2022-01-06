import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 8) return [];
    const resultReceiver = [];
    
    for(const receiver of value){
      if(receiver.rut.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultReceiver.push(receiver)
          break;
      }
      /** TODO: ALTERNATIVA PARA BUSCAR POR NOMBRE
       * else{
        if(receiver.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultReceiver.push(receiver)
        }
      }*/
    }
    return resultReceiver;
  }

}
