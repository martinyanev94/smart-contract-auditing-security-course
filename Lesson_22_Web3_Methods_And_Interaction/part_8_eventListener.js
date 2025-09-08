contract.events.MyEvent({ filter: { myIndexedParam: [42] }, fromBlock: 0 }) // Replace MyEvent with your event name
    .on('data', event => {
        console.log("Event triggered:", event);
    })
    .on('error', console.error);
