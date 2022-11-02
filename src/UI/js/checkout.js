
  alert('loaded')
  async function generateOrderId() {
    event.preventDefault(false)
    var formData = {
        amount: $('#amount').val()
      }
    const data = await axios({
      method: 'POST',
      url: 'http://localhost:9000/order',
      data: formData,
    })
    $("#orderId").text(data.data.id)
    $("#payment-box").css("display","block")
    return data.data
  }

  var keys = {
    key_id : "rzp_test_CXdol9prjiTDsa",
    key_secret : "z3yWPfZyIRoRzOM8Nx4TMSLs"
  }

  var rzp1;

  async function payOrderAmount() {
    console.log("cliked pay button");
    var options = {
        "key": keys.key_id, // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
  }
// document.getElementById('rzp-button1').onclick = function(e){
//   console.log(rzp1);
// }
