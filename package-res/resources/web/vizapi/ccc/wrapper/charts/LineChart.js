/*!
* Copyright 2010 - 2015 Pentaho Corporation.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
define([
    "./AbstractCategoricalContinuousChart"
], function(AbstractCategoricalContinuousChart) {

    return AbstractCategoricalContinuousChart.extend({
        methods: {
            _cccClass: 'LineChart',

            _supportsTrends: true,

            _options: {
                axisOffset:    0,
                tooltipOffset: 15
            },

            _readUserOptions: function(options, drawSpec) {

                this.base(options, drawSpec);

                var shape = drawSpec.shape;
                if(shape && shape === 'none') {
                    options.dotsVisible = false;
                } else {
                    options.dotsVisible = true;
                    options.extensionPoints.dot_shape = shape;
                }
            },

            _setNullInterpolationMode: function(options, value) {
                options.nullInterpolationMode = value;
            },

            _configureLegend: function() {

                this.base();

                var options = this.options,
                    extPoints = options.extensionPoints,
                    dotSize = extPoints.dot_shapeSize;
                if(dotSize != null) {
                    var dotRadius = Math.sqrt(dotSize);
                    options.legendMarkerSize = Math.max(15, 2 * (dotRadius + 3));
                }
            }
        }
    });
});
