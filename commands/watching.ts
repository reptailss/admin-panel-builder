import {DevWatcher} from "../compiler/DevWatcher";

new DevWatcher().run().then(() => console.log('start watching..'))