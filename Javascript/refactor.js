// IMPROVE READABILITY OF SIMPLE CODE, to make it more easy to understand

    // 1. make the condition clearer
    // Colleague code (before refactor)
        if(!have.before(plan.summerStart) && !plan.after(plan.summerEnd)){
            charge = quantity * plan.summerRate;
        }else{
            charge = quantity * plan.regularRate + plan.regularServiceCharge;
        }
    
    // Me. (after refactor)
        charge = summer() ? summerCharge() : regularCharge();

        function summer(){
            return !have.before(plan.summerStart()) && !have.aftet(plan.summerEnd());
        }

        function summerCharge(){
            return quantity * plan.summerRate;
        }

        function regularCharge(){
            ßreturn quantity * plan.regularRate + plan.regularServiceCharge;
        }

    // 2. combine the conditions
    // Colleague code (before refactor)
        if(employee.seniority < 2) return 0;
        if(employee.months > 12) return 0;
        if(employee.time) return 0;
    // Me. (after refactor)
        function func(){
            return (employee.seniority < 2) || (employee.months > 12) || employee.time)
        }
        if(func()) return 0;

    // 3. check the conditions in individually
    // Colleague code (before refactor)
        function payMount(){
            let result;
            if(isDead){
            result = amountFunc();
            }else{
            if(isSeparated){
                result = separatedAmout();
            }else{
                if(isRetired){
                result = retiredAmount()
                }else{
                result = normalAmount();
                }
            }
            }
            return result;
        }
    // Me. (after refactor)
        function payMount(){
            if(isDead) result = amountFunc();
            if(isSeparated) result = separatedAmout();
            if(isRetired) result = retiredAmount();
            return normalAmount();
        }
    
    // 4. use assertions to indicate assumptions
    // Colleague code (before refactor)
        func(num){
            return (discountRate) ? num - (discountRate * num) : num;
        }
    // Me. (after refactor)
        set discountRate(num){
            assert(null === num || num >= 0);
            discountRate= num;  
        }