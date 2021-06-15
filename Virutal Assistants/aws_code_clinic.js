function answerQuestions(intentRequest, callback) {
    
    const therapyType = intentRequest.currentIntent.slots.TherapyType;
    const source = intentRequest.invocationSource;
    console.log('Invocation Source = ' + source);
    const slots = intentRequest.currentIntent.slots;
    const outputSessionAttributes = intentRequest.sessionAttributes || {};
    var messageContent = '';

var braces123="brace";
    if (therapyType.toLowerCase() == 'massage therapy' || therapyType.toLowerCase() == 'massage') {
        messageContent = `Massage therapy is an effective and proven way to reduce stress, relieve stiff muscles and increase your mobility. It can rehabilitate sport injuries, increase relaxation and much more.  If you’re looking for a massage therapist in Georgetown and GTA in general, Azsure Health & Rehab has the best trained RMTs. You will feel and experience the difference in a proper therapeutic set up. For more information, please visit : http://azsure.ca/services/massage-therapy/.`;
    }
    else if (therapyType.toLowerCase() == 'physiotherapy'|| therapyType.toLowerCase() == 'physio') {
        messageContent = `Physiotherapy also referred to as “Physical therapy” is a type of treatment which treat all sorts of injuries and a wide range of conditions, illness or disability associated with different systems in your body. For example: Neuromusculoskeletal: back pain, whiplash associated disorder, sports injuries, arthritis). Cardiovascular (chronic heart disease, rehabilitation after heart attack). To see more information and what other injuries physiotherapy supports, please visit: http://azsure.ca/services/physical-therapy/.`;
    }
    else if (therapyType.toLowerCase() == 'chiropractic') {
        messageContent = `Chiropractic is a non-invasive, hands-on health care discipline that focuses on the neuro musculoskeletal system. Chiropractors practice a manual approach. Doctors of Chiropractic are specifically trained to detect and correct problems in the spine, often before the patient is even aware they exist. Chiropractic is a lifestyle that involves all aspects of wellness, including exercise, nutrition, personal development, and stress relief. `;
    }
    else if (therapyType.toLowerCase() == 'acupuncture') {
        messageContent = `The theory behind acupuncture treatment is that the healthy functioning of the body is governed by the flow of “qi” (often translated as “energy”) through a system of channels under the skin. When this flow of qi is impaired, illness occurs. By inserting fine needles at various points along the channels, the body’s balance can be restored and the illness resolved. It can treat people that suffer from neck and shoulder stiffness, sport injuries, stress, depression,  Migraine and tension headaches.`;
    }
    else if (therapyType.toLowerCase() == "lumbotrain" || therapyType.toLowerCase() == "lordoloc" + braces123) {
        messageContent = `The most exemplary product for any back pain/injury will be our Lordoloc lumbar back brace(men) and Lumbotrain back brace (woman). These products are anatomically contoured, it can be adjustable for maximum support. These  products help ease tension and activates muscle control via enhanced proprioception. These products are a lightweight stabizing orthosis for the spine and for the back.It is $480 plus HST (men).It is $450 plus HST (woman).`;
    }
    else if (therapyType.toLowerCase() == "genutrain" || therapyType.toLowerCase() == "genutrain" + braces123 ) {
        messageContent= `The genutrain knee brace is used when there is irritation (arthritis, osteoarthritis, etc. ) There are many other knee braces that have their own specialties and they differ in prices. For example: The genutrain p3 has muscle relaxing pad, corrective pad and patella pad. It is a lightweight brace and has a very good material and an adjustment strap to adjust the brace. The most common genutrain is around $300 plus HST. `;
    }
    else if (therapyType.toLowerCase() == "manutrain" || therapyType.toLowerCase() == "manutrain" + braces123) {
        messageContent= `There are multiple wrist braces for this issue, all of them have their own unique style and characteristics therefore all of them vary in prices. For example: the manutrain wrist brace has the donning aid included, it allows you to adjust things very easily and grip onto objects without irritation. Then there is the manuloc long plus, which is a very long wrist brace that almost covers your whole arm, it individually supports your finger in a neutral position so it can be treated easily. It has large Velcro fastenings to take off the brace and put it on the brace back with ease. If you want to check out all the wrist braces, please contact the clinic and for other information.The most common one is Manutrain that costs $300 plus HST. `;
    }

    //intentRequest.currentIntent.slots = null;
    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
}

function answerQuestionsClinicTimings(intentRequest, callback) {

   var messageContent = 'Mon-Fri: 10am to 8pm, Sat:10am-6pm,Sun:10pm-5pm.';

    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
    
   
}

function answerQuestionsClinicPrices(intentRequest, callback) {

    const therapyType = intentRequest.currentIntent.slots.TherapyType;
    const slots = intentRequest.currentIntent.slots;
    const outputSessionAttributes = intentRequest.sessionAttributes || {};
    var messageContent = '';

    if (therapyType.toLowerCase() == 'massage therapy') {
        messageContent = `For a 30 min threrpatic massage, it will be $56.50 with tax and for 45 min, it will be $79.10 with tax and for 1hour , the price will be $101.7 with tax. For a 30 mins hot stone massage it will be $62.15 with tax, and for 45mins it will be $84.75 with tax. Lastly, it will be $107.35 with tax for 1 hour.For cold stone massage it will be $50 without tax for 30 mins`;
    }
    else if (therapyType.toLowerCase() == 'physiotherapy') {
        messageContent = `The price is $95 for your initial assessment including your treatment then after that every session is $70.`;
    }
    else if (therapyType.toLowerCase() == 'chiropractic') {
        messageContent = `It will be $95 without tax for your initial assessment including your first treatment then after that every following session will be $65.`;
    }
    else if (therapyType.toLowerCase() == 'acupuncture') {
        messageContent = `Your initial treatment along with your first treatment will be $95 and then the following sessions will be $65.`;
    }
    else if (therapyType.toLowerCase() == 'osteopath') {
        messageContent = `Your initial treatment along with your first reatment will be $125  and then the following sessions will be $80.`;
    }
    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
}
function serviceaccuracy(intentRequest, callback) {

    const pricing = intentRequest.currentIntent.slots.service;
    const slots = intentRequest.currentIntent.slots;
    const outputSessionAttributes = intentRequest.sessionAttributes || {};
    var messageContent = '';

    if (pricing.toLowerCase() == 'silver') {
        messageContent = `Plan Silver (Bookkeeping) : Up to 35 transactions, Payroll for 10 employees (extra of $7.99/additional employee),Monthly balance sheet and Profit Loss, 4 account reconcilitation. For tax preparation: Single buisness account and Single province filings. Also if you want Endless support, then it will be $299/month with an additional cost of $267 for tax filings.`;

    }
    else if (pricing.toLowerCase() == 'gold') {
        messageContent = `Plan Gold (Bookkeeping) : Up to 90 transactions, Payroll for 20 employees (extra of $7.99/additional employee),Monthly balance sheet and Profit Loss, 4 account reconcilitation. For tax preparation: Two buisness account and Multiple province filings. Also if you want Endless support, then it will be $499/month with an additional cost of $467 for tax filings.`;
    }
    else if (pricing.toLowerCase() == 'platinum') {
        messageContent = `Plan Platinum (Bookkeeping) : Up to 125 transactions, Payroll for 30 employees (extra of $7.99/additional employee),Monthly balance sheet and Profit Loss, 6 account reconcilitation. For tax preparation: Four buisness accounts and Multiple provincial and international filings. Also if you want Endless support, then it will be $699/month with an additional cost of $767 for tax filings.`;
    }
    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
}

// ignore this code
//function bracesProducts(intentRequest,callback) {
  //  const brace = intentRequest.currentIntent.slots.brace;
    //const slots = intentRequest.currentIntent.slots;
    //const outputSessionAttributes = intentRequest.sessionAttributes || {};
    //var messageContent = '';
    //var braces123= "brace";
    
    //if (brace.toLowerCase() == "lumbotrain" || brace.toLowerCase() == "lumbotrain" + braces123 || "lordoloc" + braces123) {
      //  messageContent = `The most exemplary product for any back pain/injury will be our Lordoloc lumbar back brace(men) and Lumbotrain back brace (woman). These products are anatomically contoured, it can be adjustable for maximum support. These  products help ease tension and activates muscle control via enhanced proprioception. These products are a lightweight stabizing orthosis for the spine and for the back.It is $480 plus HST (men).It is $450 plus HST (woman).`
    //}
    //else if (brace.toLowerCase() == "genutrain" || brace.toLowerCase() == "genutrain" + braces123 ) {
      //  messageContent= `The genutrain knee brace is used when there is irritation (arthritis, osteoarthritis, etc. ) There are many other knee braces that have their own specialties and they differ in prices. For example: The genutrain p3 has muscle relaxing pad, corrective pad and patella pad. It is a lightweight brace and has a very good material and an adjustment strap to adjust the brace. The most common genutrain is around $300 plus HST. `
    //}
    //else if (brace.toLowerCase() == "manutrain" || "manutrain" + braces123) {
      //  messageContent= `There are multiple wrist braces for this issue, all of them have their own unique style and characteristics therefore all of them vary in prices. For example: the manutrain wrist brace has the donning aid included, it allows you to adjust things very easily and grip onto objects without irritation. Then there is the manuloc long plus, which is a very long wrist brace that almost covers your whole arm, it individually supports your finger in a neutral position so it can be treated easily. It has large Velcro fastenings to take off the brace and put it on the brace back with ease. If you want to check out all the wrist braces, please contact the clinic and for other information.The most common one is Manutrain that costs $300 plus HST. `
    //}
    //
      //   callback(close(intentRequest.sessionAttributes, 'Fulfilled',
      //  {
        //    contentType: 'PlainText',
          //  content: messageContent
        //}));
    
    //}
function bookAppointment(intentRequest, callback) {

    const therapyType = intentRequest.currentIntent.slots.TherapyType;
    const appointmentDate = intentRequest.currentIntent.slots.AppointmentDate;
    const appointmentTime = intentRequest.currentIntent.slots.AppointmentTime;
    var messageContent = 'Your appointment has been confirmed';

    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
}

function bookAppointmentservice(intentRequest, callback) {

    const servicetype= intentRequest.currentIntent.slots.serviceone;
    const appointmentDateyy = intentRequest.currentIntent.slots.servicedate;
    const appointmentTimeyy = intentRequest.currentIntent.slots.servicetime;
    var messageContent = 'Your appointment has been confirmed';

    callback(close(intentRequest.sessionAttributes, 'Fulfilled',
        {
            contentType: 'PlainText',
            content: messageContent
        }));
}

// --------------- Intents -----------------------

/**
 * Called when the user specifies an intent for this skill.
 */
function dispatch(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'QnATherapyDefinitions') {
        return answerQuestions(intentRequest, callback);
    } else if (intentName === 'QnAClinicTiming') {
        return answerQuestionsClinicTimings(intentRequest, callback);
    } else if (intentName === 'QnAClinicPrices') {
        return answerQuestionsClinicPrices(intentRequest, callback);
    } else if (intentName === 'BookAppointment') {
        return bookAppointment(intentRequest, callback);
    } else if (intentName === 'Braces') {
        return answerQuestions(intentRequest, callback);
    } else if (intentName === 'Pricingone') {
        return serviceaccuracy(intentRequest, callback);
    } else if (intentName === 'Bookanappointmenttwo') {
        return bookAppointmentservice(intentRequest, callback);
    }
    throw new Error(`Intent with name ${intentName} not supported`);
}

// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        // By default, treat the user request as coming from the America/New_York time zone.
        process.env.TZ = 'America/New_York';
        console.log(`event.bot.name=${event.bot.name}`);

     
       
        dispatch(event, (response) => callback(null, response));
    } catch (err) {
        callback(err);
    }
};
