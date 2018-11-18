//% weight=70 icon="\u30A2" color=#EC7505 block="Test"
namespace test {

    /**
    *  Writes to the Bluetooth UART service buffer.
    */
    //% blockId=test block="test uart write %str"
    //% shim=test::dammy
    export function dammy(str: number): void {
        console.log(str+"")
    }
}
