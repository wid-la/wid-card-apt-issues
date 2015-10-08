'use strict';

(function () {
  Polymer({

    is: 'wid-card-apt-issues',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * name
       * @type {String}
       */
      bgColor: {
        type: String
      },

      /**
      * icon
      * @type {String}
      */
      icon: {
        type: String
      },

      /**
       * csr_current_total
       * @type {String}
       */
      csrCurrentTotal: {
        type: String
      },

      /**
       * cust_current_total
       * @type {String}
       */
      custCurrentTotal: {
        type: String
      },

      /**
       * sched_current_total
       * @type {String}
       */
      schedCurrentTotal: {
        type: String
      },

      /**
       * csr_current_reschedule
       * @type {String}
       */
      csrCurrentReschedule: {
        type: String
      },

      /**
       * cust_current_reschedule
       * @type {String}
       */
      custCurrentReschedule: {
        type: String
      },

      /**
       * sched_current_reschedule
       * @type {String}
       */
      schedCurrentReschedule: {
        type: String
      },

      /**
       * csr_previous_total
       * @type {String}
       */
      csrPreviousTotal: {
        type: String
      },

      /**
       * cust_previous_total
       * @type {String}
       */
      custPreviousTotal: {
        type: String
      },

      /**
       * sched_previous_total
       * @type {String}
       */
      schedPreviousTotal: {
        type: String
      },

      /**
       * csr_previous_reschedule
       * @type {String}
       */
      csrPreviousReschedule: {
        type: String
      },

      /**
       * cust_previous_reschedule
       * @type {String}
       */
      custPreviousReschedule: {
        type: String
      },

      /**
       * sched_previous_reschedule
       * @type {String}
       */
      schedPreviousReschedule: {
        type: String
      }

    },

    _getBackgroundColor: function _getBackgroundColor(bgcolor) {
      return 'background: ' + bgcolor + ';';
    },

    _getIconImage: function _getIconImage(icon) {
      return '/images/cards/' + icon;
    },

    _getCsrPercentage: function _getCsrPercentage(csrCurrentTotal, csrCurrentReschedule, csrPreviousTotal, csrPreviousReschedule) {
      var oldPercentage = parseFloat(csrPreviousReschedule) / parseFloat(csrPreviousTotal) * 100;
      var currentPercentage = parseFloat(csrCurrentReschedule) / parseFloat(csrCurrentTotal) * 100;
      var ratio = (100 * (currentPercentage - oldPercentage) / oldPercentage).toFixed(0);

      if (ratio > 0) {
        this.$.csrPercentage.setAttribute('style', 'color:#558B2F');
      } else {
        this.$.csrPercentage.setAttribute('style', 'color:#F44336');
      }
      return ratio + '%';
    },

    _getCustPercentage: function _getCustPercentage(custCurrentTotal, custCurrentReschedule, custPreviousTotal, custPreviousReschedule) {
      var oldPercentage = parseFloat(custPreviousReschedule) / parseFloat(custPreviousTotal) * 100;
      var currentPercentage = parseFloat(custCurrentReschedule) / parseFloat(custCurrentTotal) * 100;
      var ratio = (100 * (currentPercentage - oldPercentage) / oldPercentage).toFixed(0);

      if (ratio > 0) {
        this.$.custPercentage.setAttribute('style', 'color:#558B2F');
      } else {
        this.$.custPercentage.setAttribute('style', 'color:#F44336');
      }
      return ratio + '%';
    },

    _getSchedPercentage: function _getSchedPercentage(schedCurrentTotal, schedCurrentReschedule, schedPreviousTotal, schedPreviousReschedule) {
      var oldPercentage = parseFloat(schedPreviousReschedule) / parseFloat(schedPreviousTotal) * 100;
      var currentPercentage = parseFloat(schedCurrentReschedule) / parseFloat(schedCurrentTotal) * 100;
      var ratio = (100 * (currentPercentage - oldPercentage) / oldPercentage).toFixed(0);

      if (ratio > 0) {
        this.$.schedPercentage.setAttribute('style', 'color:#558B2F');
      } else {
        this.$.schedPercentage.setAttribute('style', 'color:#F44336');
      }
      return ratio + '%';
    }

  });
})();