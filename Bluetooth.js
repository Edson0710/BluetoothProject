import { BleManager } from 'react-native-ble-plx';

const DEVICE_NAME = 'nombre-de-tu-dispositivo'; // El nombre de tu dispositivo Bluetooth HC05
const SERVICE_UUID = 'servicio-uuid'; // El UUID del servicio de tu dispositivo Bluetooth HC05
const CHARACTERISTIC_UUID = 'caracteristica-uuid'; // El UUID de la característica de tu dispositivo Bluetooth HC05

class Bluetooth {
  constructor() {
    this.manager = new BleManager();
    this.device = null;
    this.service = null;
    this.characteristic = null;
  }

  async connect() {
    const devices = await this.manager.devices([DEVICE_NAME]);
    if (devices.length === 0) {
      throw new Error('No se ha encontrado el dispositivo Bluetooth');
    }
    this.device = devices[0];
    await this.device.connect();
    this.service = await this.device.discoverAllServicesAndCharacteristics();
    this.characteristic = await this.service.characteristics(CHARACTERISTIC_UUID);
  }

  async writeValue(value) {
    const data = value.toString().padStart(2, '0');
    await this.characteristic.writeWithResponse(data);
  }
}

export default new Bluetooth();
