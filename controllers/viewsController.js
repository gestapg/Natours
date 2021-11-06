const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get toyr data from collection
  const tours = await Tour.find();

  // 2) Build templates
  // 3) Render that temolate using tour data
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) get the data, for requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  // 2) Build Template

  // 3) Render Template using data from step 1

  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
    tour
  });
});
