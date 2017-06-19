angular.module('app', []);
angular
.module('app')
.controller('HomeController', HomeController);

function HomeController () {
    var vm = this;
    vm.done= false;
    
 vm.click = function () {
        vm.interestRate = (vm.interest/100) / vm.period;
        console.log(vm.interestRate);
        vm.numberOfPayments = (vm.loanTerm * vm.period);
        console.log(vm.numberOfPayments);
        vm.compoundedInterestRate = Math.pow((1 + vm.interestRate), vm.numberOfPayments);
        console.log(vm.compoundedInterestRate)
        vm.interestQuotient = (vm.interestRate * vm.compoundedInterestRate) / (vm.compoundedInterestRate - 1);
        console.log(vm.interestQuotient);
        vm.monthlyPayment = vm.principle * vm.interestQuotient
        console.log(vm.monthlyPayment)
        if (vm.monthlyPayment > 0) {
            vm.done= true;
        } else {
            alert('Please Enter All Information!')
        }
    }
}