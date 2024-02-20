function daysBetweenDates (startDateString, finalDateString){
      try {
        const startDateParts = startDateString.split('-');
        const finalDateParts = finalDateString.split('-');

        if (startDateParts.length !== 3 || finalDateParts.length !== 3) {
          return '';
        }

        const startYear = parseInt(startDateParts[0]);
        const startMonth = parseInt(startDateParts[1]) - 1; // Months are zero-based in JavaScript
        const startDay = parseInt(startDateParts[2]);
        const startDate = new Date(startYear, startMonth, startDay);

        const finalYear = parseInt(finalDateParts[0]);
        const finalMonth = parseInt(finalDateParts[1]) - 1; // Months are zero-based in JavaScript
        const finalDay = parseInt(finalDateParts[2]);
        const finalDate = new Date(finalYear, finalMonth, finalDay);

        const timeDifference = finalDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysDifference;
      } catch (e) {
        return 0;
      }
    };
