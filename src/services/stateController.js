const mqtt = require('mqtt')
const axios = require('axios')
const FARMBOTURL = "https://my.farmbot.io/api/tokens"; // save this somewhere else...

class stateControllerClass {
    constructor() {
        this.uptime = 0;
        this.timer = null
    }

    loggedIn(care, store) {
        let token = care.data.token.encoded;
        let broker = care.data.token.unencoded.mqtt
        let botId = care.data.token.unencoded.bot

        store.commit('setStatus', {
            token,
            broker,
            botId
        });
    }

    logout() {
        let status = {};
        try {
            let farmbotSimulatorStatus = JSON.parse(window.localStorage.getItem('farmbotSimulator'))
            let tmp = {};
            for (let i in farmbotSimulatorStatus) {
                if (i !== 'status') {
                    tmp[i] = farmbotSimulatorStatus[i]
                }
            }
            tmp = JSON.stringify(tmp)
            window.localStorage.setItem('farmbotSimulator', tmp)
        } catch (err) {}
    }

    async checkTokenAndRefresh(store) {
        let status = {}
        return new Promise((resolve, reject) => {
            try {
                status = JSON.parse(window.localStorage.getItem('farmbotSimulator')).status;
            } catch (err) {
                return reject('missing token')
            }
            let token = status.token;
            if (token === null) return reject('missing token');

            let headers = {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            let params = {}
            axios.get(FARMBOTURL, {
                params,
                headers
            }).then(response => {
                store.commit('setStatus', {
                    token: response.data.token.encoded
                });
                resolve(true)
            }).catch(error => {
                reject(true);
            })
        })
    }


    async logIn(params) {
        return new Promise(function (resolve, reject) {
            axios
                .post(FARMBOTURL, params)
                .then(function (response) {
                    return resolve(response);
                })
                .catch(function (error) {
                    return reject(
                        error.response || {
                            data: {
                                error: error.message
                            }
                        }
                    );
                });
        });
    }

    // async getTokenfromAPI () {
    //     return new Promise((resolve, reject) =>{

    //         axios.get
    //     })
    // }

    pong(wholeTopic, message) {
        console.log(wholeTopic)
        wholeTopic = wholeTopic.split('/ping/').join('/pong/')
        message = message.toString();
        let client = this.client
        client.publish(wholeTopic, message)

    }

    sendStatus() {
        let message = {
            "configuration": {
                "arduino_debug_messages": false,
                "auto_sync": false,
                "beta_opt_in": false,
                "disable_factory_reset": false,
                "firmware_debug_log": false,
                "firmware_hardware": "none",
                "firmware_input_log": false,
                "firmware_output_log": false,
                "network_not_found_timer": null,
                "os_auto_update": false,
                "sequence_body_log": false,
                "sequence_complete_log": false,
                "sequence_init_log": false
            },
            "informational_settings": {
                "busy": false,
                "cache_bust": null,
                "commit": "1c5ef14bfa90cbbaff792f3a14c7c0707c73bb08",
                "controller_commit": "1c5ef14bfa90cbbaff792f3a14c7c0707c73bb08",
                "controller_uuid": "29417194-a853-55ef-6de8-91dd9b849b0b",
                "controller_version": "10.1.4",
                "cpu_usage": 1,
                "disk_usage": 0,
                "env": "prod",
                "firmware_commit": "1711db1d9923bc295f81a5eb9952f6b3a10db6a9",
                "firmware_version": "none",
                "idle": null,
                "last_status": null,
                "locked": true,
                "memory_usage": 43,
                "node_name": "farmbot@farmbot-000000004ed75c64.local",
                "private_ip": "192.168.100.30",
                "scheduler_usage": 1,
                "soc_temp": 44,
                "sync_status": "sync_now",
                "target": "rpi3",
                "throttled": "0x0",
                "update_available": false,
                "uptime": this.uptime,
                "wifi_level": -28,
                "wifi_level_percent": 97
            },
            "jobs": {},
            "location_data": {
                "axis_states": {
                    "x": "unknown",
                    "y": "unknown",
                    "z": "unknown"
                },
                "load": {
                    "x": null,
                    "y": null,
                    "z": null
                },
                "position": {
                    "x": 100,
                    "y": 100,
                    "z": 100
                },
                "raw_encoders": {
                    "x": null,
                    "y": null,
                    "z": null
                },
                "scaled_encoders": {
                    "x": null,
                    "y": null,
                    "z": null
                }
            },
            "mcu_params": {
                "movement_step_per_mm_x": 5.0,
                "movement_motor_current_y": 600.0,
                "movement_home_at_boot_x": 0.0,
                "pin_guard_5_pin_nr": 0.0,
                "encoder_enabled_y": 1.0,
                "movement_home_up_x": 0.0,
                "movement_microsteps_z": 1.0,
                "movement_enable_endpoints_x": 0.0,
                "movement_timeout_y": 120.0,
                "pin_guard_2_pin_nr": 0.0,
                "movement_invert_motor_x": 0.0,
                "movement_stop_at_max_x": 0.0,
                "pin_guard_2_active_state": 1.0,
                "pin_guard_4_pin_nr": 0.0,
                "encoder_missed_steps_decay_y": 5.0,
                "movement_stop_at_max_z": 0.0,
                "movement_keep_active_x": 1.0,
                "pin_guard_5_active_state": 1.0,
                "encoder_enabled_x": 1.0,
                "pin_guard_3_time_out": 60.0,
                "encoder_use_for_pos_y": 0.0,
                "movement_invert_2_endpoints_x": 0.0,
                "encoder_use_for_pos_x": 0.0,
                "movement_stop_at_home_x": 0.0,
                "encoder_scaling_x": 5556.0,
                "encoder_use_for_pos_z": 0.0,
                "movement_min_spd_z": 50.0,
                "param_e_stop_on_mov_err": 0.0,
                "movement_invert_endpoints_z": 0.0,
                "movement_stall_sensitivity_x": 30.0,
                "movement_step_per_mm_y": 5.0,
                "movement_axis_nr_steps_y": 0.0,
                "encoder_type_z": 0.0,
                "movement_invert_endpoints_x": 0.0,
                "movement_axis_nr_steps_z": 0.0,
                "param_mov_nr_retry": 3.0,
                "encoder_missed_steps_decay_z": 5.0,
                "movement_max_spd_y": 400.0,
                "encoder_type_x": 0.0,
                "pin_guard_1_time_out": 60.0,
                "movement_enable_endpoints_y": 0.0,
                "encoder_enabled_z": 1.0,
                "movement_keep_active_y": 1.0,
                "encoder_scaling_y": 5556.0,
                "movement_timeout_x": 120.0,
                "movement_steps_acc_dec_y": 300.0,
                "movement_microsteps_x": 1.0,
                "movement_axis_nr_steps_x": 0.0,
                "encoder_invert_y": 0.0,
                "encoder_missed_steps_max_y": 5.0,
                "movement_motor_current_z": 600.0,
                "movement_stall_sensitivity_z": 30.0,
                "encoder_missed_steps_decay_x": 5.0,
                "encoder_type_y": 0.0,
                "movement_invert_2_endpoints_y": 0.0,
                "movement_secondary_motor_invert_x": 1.0,
                "pin_guard_3_pin_nr": 0.0,
                "movement_max_spd_x": 400.0,
                "movement_home_at_boot_z": 0.0,
                "pin_guard_4_time_out": 60.0,
                "movement_max_spd_z": 400.0,
                "movement_steps_acc_dec_z": 300.0,
                "movement_home_at_boot_y": 0.0,
                "movement_microsteps_y": 1.0,
                "movement_motor_current_x": 600.0,
                "pin_guard_1_pin_nr": 0.0,
                "pin_guard_1_active_state": 1.0,
                "movement_min_spd_x": 50.0,
                "movement_home_up_y": 0.0,
                "pin_guard_3_active_state": 1.0,
                "movement_home_spd_x": 50.0,
                "movement_invert_2_endpoints_z": 0.0,
                "encoder_scaling_z": 5556.0,
                "movement_min_spd_y": 50.0,
                "movement_home_spd_z": 50.0,
                "encoder_missed_steps_max_z": 5.0,
                "movement_enable_endpoints_z": 0.0,
                "encoder_invert_z": 0.0,
                "pin_guard_5_time_out": 60.0,
                "movement_secondary_motor_x": 1.0,
                "movement_invert_endpoints_y": 0.0,
                "pin_guard_4_active_state": 1.0,
                "movement_stall_sensitivity_y": 30.0,
                "movement_stop_at_max_y": 0.0,
                "movement_stop_at_home_y": 0.0,
                "movement_timeout_z": 120.0,
                "movement_invert_motor_y": 0.0,
                "pin_guard_2_time_out": 60.0,
                "movement_steps_acc_dec_x": 300.0,
                "movement_keep_active_z": 1.0,
                "movement_home_up_z": 1.0,
                "encoder_missed_steps_max_x": 5.0,
                "movement_invert_motor_z": 0.0,
                "movement_stop_at_home_z": 0.0,
                "encoder_invert_x": 0.0,
                "movement_step_per_mm_z": 25.0,
                "movement_home_spd_y": 50.0
            },
            "pins": {},
            "process_info": {
                "farmwares": {}
            },
            "user_env": {
                "LAST_CLIENT_CONNECTED": "\"2020-08-17T11:54:17.403Z\"",
                "camera": "\"USB\""
            }
        }
        
    }

    stopTimerRunTimer() {
        try {
            this.uptime = 0;
            clearInterval(this.timer)
        } catch (err) {

        }
        this.timer = setInterval(() => {
            this.uptime++
        }, 1000)
    }

    connectMQTT() {
        let store = JSON.parse(window.localStorage.getItem('farmbotSimulator')).status
        let {
            broker,
            token,
            botId
        } = store

        console.log(`mqtt://${broker}`)
        console.log(token)
        console.log(botId)

        broker = `wss://${broker}:443/ws/mqtt`
        const client = mqtt.connect(broker, {
            clean: true,
            // clientId: `FBJS-${Farmbot.VERSION}-${genUuid()}`,
            password: token,
            protocolId: "MQIsdp",
            protocolVersion: 3,
            // reconnectPeriod,
            username: botId,
        });

        client.on("error", function (error) {
            console.log("Can't connect" + error);
        })

        client.on("message", (wholeTopic, message) => {
            // console.log(wholeTopic)
            let topic = wholeTopic.split('/')[2]
            // console.log(message.toString());
            switch (topic) {
                case "ping":
                    // this.pong(wholeTopic, message)
                    break;
            }

        })

        client.on("connect", () => {
            this.stopTimerRunTimer();
            console.log("connected");
            this.client = client;
            client.subscribe(`bot/${botId}/#`, {
                qos: 1
            });
        })
    }
}

let stateControllerF = new stateControllerClass();

// exports.authService = function (key) {

//   return authInstance;
// };

export default function stateController() {
    return stateControllerF;
};